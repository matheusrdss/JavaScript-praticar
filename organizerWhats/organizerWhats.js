let pessoasList = [
    pessoaUm = {
        itsMe: true,
        admin: true,
        name: 'Matheus'
    },
    pessoaDois = {
        itsMe: false,
        admin: false,
        name: 'Nicolly'
    },
    pessoaTres = {
        itsMe: false,
        admin: true,
        name: 'Jucelino'
    }
]

const organizerWhats = (pessoasList) => {
    let eu = undefined;
    let adm = undefined;
    let adm2 = undefined;
    let adm3 = undefined;
    let outro = undefined;
    let outro2 = undefined;
    let outro3 = undefined;

    // EU
    if(pessoaUm.itsMe == true) {
        eu = pessoaUm.name;
    } else if (pessoaDois.itsMe == true) {
        eu = pessoaDois.name;
    } else if (pessoaTres.itsMe == true) {
        eu = pessoaTres.name;
    }

    // ADM
    if(pessoaUm.adm == true) {
        adm = pessoaUm.name;
    } else if (pessoaDois.adm == true) {
        eu = pessoaDois.name;
    } else if (pessoaTres.itsMe == true) {
        eu = pessoaTres.name;
    }

    // OUTRO
    if(pessoaUm.itsMe == true) {
        eu = pessoaUm.name;
    } else if (pessoaDois.itsMe == true) {
        eu = pessoaDois.name;
    } else if (pessoaTres.itsMe == true) {
        eu = pessoaTres.name;
    }

    console.log(eu);
}

organizerWhats(pessoasList);