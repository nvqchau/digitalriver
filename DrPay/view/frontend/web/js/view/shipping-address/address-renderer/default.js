/**
 * Mixin added to update shopping cart summary data
 */
define([
    'jquery',
    'ko',
    'uiComponent',
    'Magento_Checkout/js/action/select-shipping-address',
    'Magento_Checkout/js/model/quote',
    'Magento_Checkout/js/model/shipping-address/form-popup-state',
    'Magento_Checkout/js/checkout-data',
    'Magento_Customer/js/customer-data'
], function ($, ko, Component, selectShippingAddressAction, quote, formPopUpState, checkoutData, customerData) {
    'use strict';
    return function (target) {
        return target.extend({

            selectAddress: function () {
                selectShippingAddressAction(this.address());
                checkoutData.setSelectedShippingAddress(this.address().getKey());
                var shippingAddressFormData = checkoutData.getShippingAddressFromData();
                if (shippingAddressFormData !== null) {
                    shippingAddressFormData.country_id = this.address().countryId ? this.address().countryId : "";
                    shippingAddressFormData.region_id = this.address().regionId ? this.address().regionId : "";
                    shippingAddressFormData.postcode = this.address().postcode ? this.address().postcode : "";
                    checkoutData.setShippingAddressFromData(shippingAddressFormData);
                }
            }
        });
    }
});


