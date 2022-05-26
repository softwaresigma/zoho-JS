const ZohoAuth = require("./../zoho/auth.zoho");

class Calendar extends ZohoAuth {
    constructor(uniq_name,client_id, client_secret, refresh_token) {
        super(uniq_name,client_id, client_secret, refresh_token)
    }

    /**
     *
     * @param org_id
     * @param parameters
     * @returns {Promise<any|undefined>}
     */
    async getCalenderList(org_id,parameters) {
        try {
            return await this.customRequest(`http://calendar.zoho.com/api/v1/calendars`, "GET",parameters);
        } catch (e) {
            if (e.response !== undefined)
                console.error(e.response.data);
            else
                console.error(e.message);
        }
    }
}

module.exports = Calendar;
