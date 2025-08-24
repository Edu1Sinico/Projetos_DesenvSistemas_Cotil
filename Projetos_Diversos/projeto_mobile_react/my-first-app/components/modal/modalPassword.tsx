import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import useStorage from '../../hooks/useStorage'

// Importa as informações como parâmetro da outra página, como por exemplo, a senha gerada e as informações de ativar ou desativar
// o ModalPassword (handleClose).
export function ModalPassowrd({ password, handleClose }) {

    // Importa os métodos de salvamento do useStorage criado
    const { saveItem } = useStorage();

    // Função para copiar informações em um campo
    async function handleCopyPassword() {
        // Aguarda a função async para chamar o método de salvar a senha no clipboard
        await Clipboard.setStringAsync(password);

        // Salva o item selecionado em um arquivo local
        await saveItem("@pass",password);

        alert("Senha salva com sucesso");

        // Após copiar a senha, ele fecha o pop-up
        handleClose();
    }

    return (
        <View style={styles.container}>

            {/* Card centralizado com a informação da senha */}
            {/* As views se comportam como "Divs" */}
            <View style={styles.content}>
                {/* Título */}
                <Text style={styles.title}>Senha gerada</Text>

                {/* Pressable - Algo interativo sem estilos */}
                {/* Chama a função do handleCopyPassoword */}
                <Pressable style={styles.innerPassword} onLongPress={handleCopyPassword}>
                    <Text style={styles.text}>
                        {password}
                    </Text>
                </Pressable>

                {/* Área dos botões */}
                <View style={styles.buttonArea}>

                    {/* A função realiza o fechamento do Pop-up */}
                    <TouchableOpacity style={styles.button} onPress={handleClose}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopyPassword}>
                        <Text style={styles.buttonSaveText}>Salvar Senha</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgb(24,24,24,0.6)",
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

    content: {
        backgroundColor: "#FFF",
        width: '85%',
        paddingTop: 24,
        paddingBottom: 24,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 24,
    },

    text: {
        color: "#FFF",
        textAlign: "center",
    },

    innerPassword: {
        backgroundColor: "#0E0E0E",
        width: "90%",
        padding: 14,
        borderRadius: 8,
    },

    buttonArea: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        marginTop: 8,
    },

    button: {
        flex: 1,
        alignItems: "center",
        marginTop: 14,
        marginBottom: 14,
        padding: 8,
        borderRadius: 8,
    },

    buttonSave: {
        backgroundColor: "#292DE9",
    },


    buttonText: {

    },

    buttonSaveText: {
        color: "#FFF",
        fontWeight: "bold",
    }



})

