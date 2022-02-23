import mercadopago from 'mercadopago';

export const crearorden = async (req, res) => {

    mercadopago.configure({
        access_token: process.env.TOKEN_MP
    });

    var preference = {
        items: [
            {
                title: 'Fone Airdots sem fio',
                quantity: 1,
                currency_id: 'ARS',
                unit_price: 1.5
            }
        ],
        notification_url: "https://6cc3-2804-14c-bf3a-9071-50b6-2eb5-f64f-746.ngrok.io"
    };
    //let compra = preference.items[0] == preference.items.currency_id ? preference.items[0] : preference.items[4];
    //console.log(compra)
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