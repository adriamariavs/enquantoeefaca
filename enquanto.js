function main() {
    var usuario;
    var senha;
    var recorrente;
    
    recorrente = true;
    while (recorrente == true) {
        usuario = window.prompt('Enter a value for usuario');
        senha = window.prompt('Enter a value for senha');
        if (usuario == "Adria") {
            if (senha == "2403") {
                window.alert("senha e usuario Ok");
                recorrente = false;
            }
        }
    }
}
