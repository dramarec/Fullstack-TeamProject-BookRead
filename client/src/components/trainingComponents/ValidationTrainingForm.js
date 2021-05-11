import * as Yup from 'yup';
import moment from 'moment';

export const validationSchema = Yup.object().shape({
    start: Yup.date()
        .required('Вкажіть дату початку тренування')
        .max(Yup.ref('end'), 'Не коректна дата початку!'),
    end: Yup.date()
        .required('Вкажіть дату завершення тренування')
        .min(Yup.ref('start'), 'Вибіріть коректну дату')
        .test({
            message: 'Дата завершення повинна бути більшою',
            test: function (value) {
                const start = moment(this.parent.start).format('YYYY-MM-DD');
                const end = moment(value).format('YYYY-MM-DD');
                return !moment(start).isSame(moment(end));
            },
        }),
    book: Yup.object().required('Ви не обрали книжку'),
});
