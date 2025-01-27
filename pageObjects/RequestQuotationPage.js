
export class RequestQuotationPage extends BasePage{
    constructor(page) {
        super(page);
        this.requestForm = {
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
            },
            calculatePremium: 'text=Calculate Premium',
            resetBtn: '#resetquote',
            saveQuatationBtn: 'input[type="submit"]',            
        }        
    }

    async enterQuatationData({
        breakdownCover,
        windscreenRepair,
        vehicle: { 
            numberOfAccidentsLastYear,
            registrationNumber,
            totalMileage,
            estimatedValue,
            parkingLocation    
        },
        startOfPolicy: {
            year,
            month,
            day
        }
    }) {

        await this.selectOptionInDropdown(this.requestForm.breakdownCover, breakdownCover);

        if(windscreenRepair === 'yes') {
        await this.check(this.requestForm.windscreenRepair.yes);
        } else {
            await this.check(this.requestForm.windscreenRepair.no);
        }

        await this.fill(this.requestForm.incidentsLastYear, vehicle[numberOfAccidentsLastYear]);
        await this.fill(this.requestForm.registrationNumber, vehicle[registrationNumber]);
        await this.fill(this.requestForm.mileage, vehicle[totalMileage]);        
    }

    async clickOnCalculatePremium() {
        await this.click(this.requestForm.calculatePremium);
    }

    async clickOnResetForm(){
        await this.click(this.requestForm.resetBtn);
    }

    async clickOnSaveBtn() {
        await this.click(this.requestForm.saveQuatationBtn);
    }
}
