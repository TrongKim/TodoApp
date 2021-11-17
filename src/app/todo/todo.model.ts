import { FormlyFieldConfig } from '@ngx-formly/core';

export interface Todo{
    id?: object;
    title: string;
    time: string;
    where: string;
}

export class CTodo{
    id?: object;
    title: string;
    time: string;
    where: string;

    formField() {
        return <FormlyFieldConfig[]>[
            {
                key:'title',
                type: 'input',
                className: 'flex-1',
                templateOptions: {
                    attributes: {
                        style: "padding: 20px;"
                    },
                    type: 'text',
                    placeholder: 'Title',
                    required: true,
                }
            },
            {
                key:'time',
                type: 'input',
                className: 'flex-1',
                templateOptions: {
                    attributes: {
                        style: "padding: 20px;"
                    },
                    type: 'text',
                    placeholder: 'Time',
                    required: true,
                }
            },
            {
                key:'where',
                type: 'input',
                className: 'flex-1',
                templateOptions: {
                    attributes: {
                        style: "padding: 20px"
                    },
                    type: 'text',
                    placeholder: 'Where',
                    required: true,
                }
            }
        ]
    }
}