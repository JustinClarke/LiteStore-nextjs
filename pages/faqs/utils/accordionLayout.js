import React, { useState } from 'react';
import { data } from './content';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

function getQuestion() {

}

export default function accordionLayout() {
    let l = data[0].info.map((s) => (s)).length
    let currentQuestion, currentAnswer;
    for (let i = 0; i < l; i++) {
        currentQuestion = data[0].info[i].question
        currentAnswer = data[0].info[i].answer
        return (
            <Accordion>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {currentQuestion}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            {currentAnswer}
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        );
    }
    
}