import frappe
from frappe import _
from datetime import date
import requests
import json
from frappe import auth
from frappe.utils import today
from frappe.sessions import Session

@frappe.whitelist( allow_guest=True )
def login(usr, pwd):
    try:
        login_manager = frappe.auth.LoginManager()
        login_manager.authenticate(user=usr, pwd=pwd)
        login_manager.post_login()
    except frappe.exceptions.AuthenticationError:
        frappe.clear_messages()
        frappe.local.response["message"] = {
            "success_key":0,
            "message":"Authentication Error!"
        }

        return

    api_generate = generate_keys(frappe.session.user)
    user = frappe.get_doc('User', frappe.session.user)

    frappe.response["message"] = {
        "success_key":1,
        "message":"Authentication success",
        "sid":frappe.session.sid,
        "api_key":user.api_key,
        "api_secret":api_generate,
        "username":user.username,
        "email":user.email
    }


def generate_keys(user):
    user_details = frappe.get_doc('User', user)
    api_secret = frappe.generate_hash(length=15)

    if not user_details.api_key:
        api_key = frappe.generate_hash(length=15)
        user_details.api_key = api_key

    user_details.api_secret = api_secret
    user_details.save()

    return api_secret

@frappe.whitelist()
def logout():
    if hasattr(frappe.local, "session"):
        frappe.session.sid = ""
    frappe.local.cookie_manager.delete_cookie(["full_name", "user_id", "sid", "user_image", "system_user"])

@frappe.whitelist()
def on_create(self, method):
    customer = frappe.db.get_value("Customer", {'customer_name': self.full_name})
    if customer:
        existing_account = frappe.get_doc("Customer", customer)
        existing_account.update(
            {
                "customer_name":self.full_name,
                "customer_type":'Individual',
                "customer_group":'Individual',
                "territory":'India',
            }
        )
        existing_account.save()
        existing_profile = frappe.get_doc("Profile", customer)
        existing_profile.update(
            {
                "full_name":self.full_name,
                "email":self.email,
                "phone":self.phone
            }
        )
        existing_profile.save()
    else:
        doc = frappe.get_doc({
                "doctype": "Customer",
                "customer_name":self.full_name,
                "customer_type":'Individual',
                "customer_group":'Individual',
                "territory":'India',
            })
        doc.insert(ignore_permissions=True)
        profile = frappe.get_doc({
                "doctype": "Profile",
                "full_name":self.full_name,
                "email":self.email,
                "phone":self.phone
            })
        profile.insert(ignore_permissions=True)

@frappe.whitelist()
def create_shipment(data):
    Shipment = frappe.get_doc({
                "doctype": "Create Shipment",
                "originuae":data['origin_uae'],
                "origin_city":data['origin_city'],
                "destination":data['destination'],
                "destination_pincode":data['destination_pincode'],
                "destination_city":data['destination_city'],
                "shipment_type":data['shipment_type'],
                "total_pieces":data['total_pieces'],
                "parcel_weight":data['weight'],
            })
    Shipment.insert(ignore_permissions=True)

@frappe.whitelist()
def tracking_details(data):
    existing_details = frappe.db.get_value("Tracking Details", {'order_id': data["value"]}, ['name'])
    if existing_details:
        details = frappe.get_doc("Tracking Details", existing_details)
    else:
        details = frappe.get_doc("Tracking Details", data["value"])
    return details