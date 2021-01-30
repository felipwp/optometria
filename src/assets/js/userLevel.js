module.exports = {
    getUserLevel: function(occupation) {
        switch(occupation) {
            case "Secretário(a)":
                return 0;
            case "Optometrista": 
                return 1;
            case "Administrador(a)":
                return 2;
            default: 
                break;
        }
    }
    
}