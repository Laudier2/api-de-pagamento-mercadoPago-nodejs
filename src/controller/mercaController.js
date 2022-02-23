import mercadopago from 'mercadopago';

export const crearorden = async (req, res) => {

    mercadopago.configure({
        access_token: 'TEST-3591372541539825-022300-64184a0fc109cd34234274b9aba574f8-1079041079'
    });

    var preference = {
        items: [
            {
                title: 'FoneAirdots',
                quantity: 1,
                currency_id: 'ARS',
                unit_price: 1.5
            },
            {
                title: 'Celular',
                quantity: 2,
                currency_id: 'ARS',
                unit_price: 10.5
            }
        ],
        notification_url: "https://9bf9-2804-14c-bf3a-9071-50b6-2eb5-f64f-746.ngrok.io"
    };
    console.log(preference)
    mercadopago.preferences.create(preference)
    .then((ev) => {
        res.json(ev)
    }).catch((err) => {
        res.send(err)
    })

    //res.send('helo')
}

export const notificationorden = async (req, res) => {
    const dados = res.query;

    console.log(dados)

    res.ststus(200)
}