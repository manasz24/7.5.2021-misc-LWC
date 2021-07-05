import { LightningElement } from 'lwc';
import DESCRIPTION_ONE from '@salesforce/label/c.label1'
import DESCRIPTION_TWO from '@salesforce/label/c.label2'
export default class CustomLabelsDemo extends LightningElement {
    LABELS = { 
        descriptionOne:DESCRIPTION_ONE,
        descriptionTwo:DESCRIPTION_TWO
    }
}