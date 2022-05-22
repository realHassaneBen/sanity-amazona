import { Step, StepLabel, Stepper } from '@mui/material';
import React from 'react';

export default function CheckoutWizard({ activeStep = 0 }) {
    return (
        <Stepper active={activeStep} alternativeLabel>
            {['Login', 'Shipping Address', 'Payment Method', 'Place Order'].map(
                (step) => (
                    <Step key={step}>{step}</Step>
                )
            )}
        </Stepper>
    );
}
