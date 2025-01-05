
export class requestQuotation extends BasePage{
    constructor(page) {
        super(page);
        this.qrequestForm = {
            title: 'h2',
            breakdownCover: '#quotation_breakdowncover',
            windscreenRepair: {
                yes: '#quotation_windscreenrepair_t',
                no: '#quotation_windscreenrepair_f',                
            },
            incidentsLastYear: '#quotation_incidents',
            registrationNumber: '#quotation_vehicle_attributes_registration',
            mileage: '#quotation_vehicle_attributes_mileage',
            estimatedValue: '#quotation_vehicle_attributes_value',
            parkingLocation: '#quotation_vehicle_attributes_parkinglocation',
            policyStartDate: {
                year: '#quotation_vehicle_attributes_policystart_1i',
                month: '#quotation_vehicle_attributes_policystart_2i',
                day: '#quotation_vehicle_attributes_policystart_3i',
            }
            
        }
    }
}
