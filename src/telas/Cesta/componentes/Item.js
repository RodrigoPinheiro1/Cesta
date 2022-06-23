import React from 'react';

import Texto from "../../../componentes/Texto";
import {View, Image, StyleSheet} from "react-native";


export default function item({item: {nome, imagem}}) {

    return <View style={estilos.item}>
        <Image source={imagem} style={estilos.imagem}/>
        <Texto style={estilos.nome}>{nome}</Texto>

    </View>

}
const estilos = StyleSheet.create({


    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 32,

    },
    item:
        {

            flexDirection: "row",
            borderBottomWidth: 1,
            borderBottomColor: "#ECECEC",
            paddingVertical: 16,
            marginHorizontal:16,
            alignItems: "center",
        },
    imagem: {
        width: 46,
        height: 46,
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646",
    }

});

