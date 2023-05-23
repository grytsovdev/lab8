import { AbstractControl, ValidatorFn } from "@angular/forms";
import { ValidatorPhoneServiceService } from "src/app/Serivces/validator-phone-service.service";

export function phoneValidaror(): ValidatorFn {
    return (
        control: AbstractControl
    ): {
        [key: string]: boolean
    } | null => {
        let validator = new ValidatorPhoneServiceService()
        let valid = !control.value || validator.validateMobileNumber(control.value);
        return valid ? null : { facultyPhoneNumber: true }
    }
}