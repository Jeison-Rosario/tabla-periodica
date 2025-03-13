const grupos = function(grupo) {
    const colores = {
            "A": "A",
            "AA": "AA",
            "MT": "MT",
            "LT": "LT",
            "AT": "AT",
            "OM": "OM",
            "M": "M",
            "ONM": "ONM",
            "H": "H",
            "GN": "GN"
        };
    return colores[grupo];
};

exports.grupos = grupos;