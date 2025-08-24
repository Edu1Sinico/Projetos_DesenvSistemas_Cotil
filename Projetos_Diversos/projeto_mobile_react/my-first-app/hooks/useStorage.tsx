// Classe criada para salvar as informações de senhas geradas

/* 
Biblioteca para salvar as informações:
    - "@react-native-async-storage/async-storage"
*/
import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    // Buscar os items salvos
    const getItem = async (key) => {
        try {
            const passwords = await AsyncStorage.getItem(key);
            return JSON.parse(passwords) || [];
        } catch (error) {
            console.log("Erro ao buscar: ", error);
            return [];
        }
    }

    // Salvar um item no storage
    const saveItem = async (key, value) => {
        try {
            // Pega suas senhas já salvas e salva junto com a nova
            let passwords = await getItem(key);

            // Colocando o novo item para a lista
            passwords.push(value);

            // Salva os valores que você gerou.
            await AsyncStorage.setItem(key, JSON.stringify(passwords));

        } catch (error) {
            console.log("Erro ao salvar: ", error);
        }
    }

    // Remover algo do storage
    const removeItem = async (key, item) => {
        try {
            // Busca novamente todas a suas senhas e armazena em uma variável
            let passwords = await getItem(key);

            /* Ao selecionar o item que você clicou, 
            ele irá retornar todos os seus items da lista, 
            menos o que você selecionou*/
            let myPasswords = passwords.filter( (password) => {
                return(password !== item);
            })

            // Atualiza sua tabela com o valor selecionado removido
            await AsyncStorage.setItem(key, JSON.stringify(myPasswords));
            return myPasswords;

        } catch (error) {
            console.log("Erro ao deletar: ", error);
        }
    }

    return {
        getItem,
        saveItem,
        removeItem,
    }
}

export default useStorage;