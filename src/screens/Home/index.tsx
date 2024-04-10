import { View, Text, TextInput, Pressable, FlatList, Alert, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { Task } from '../components/Task';


export function Home(){
    const [isTyping, setIsTyping] = useState(false);
    const [tasks, setTasks] = useState<string[]>([]);
    const [descTasks, setDescTasks] = useState('');
    const [taskCounter, setTaskCounter] = useState(0);
    const [checkCounter, setCheckCounter] = useState(0);
    const [isPressedAdd, setIsPressedAdd] = useState(false);
    let increment: number

    function handleTaskAdd(){
        if(tasks.includes(descTasks)){
            return Alert.alert('Tarefa já existe', 'Já existe essa tarefa na lista')
        }
        if(descTasks == ''){
            return Alert.alert('Preencha o campo', 'Você não pode adicionar uma tarefa sem descrição')
        }
        setTasks(prevState =>[...prevState, descTasks]);
        setDescTasks('');
        setIsTyping(false)
    }
    function handleTaskRemove(description: string){
        Alert.alert('Remover', `Remover a tarefa ${description}?`, [
            {
              text:'Sim',
              onPress: () => {
                setTasks(prevState => prevState.filter(task => task !== description));
                setCheckCounter(prevCounter => prevCounter - 1);
              }
            },
            {
              text:'Não',
              style: 'cancel'
            }
          ])
    }

    function handleInput(text: string) {
        setIsTyping(text.trim().length > 0);
        setDescTasks(text);
    }
    
    

    function handleTaskCounter() {
        // Verifica se o array de tarefas está vazio
        if (tasks.length === 0) {
            setTaskCounter(0); // Se estiver vazio, define o contador como 0
        } else {
            for (let index = 0; index < tasks.length; index++) {
                setTaskCounter(index + 1); // Adiciona 1 ao índice para contar corretamente as tarefas
            }
        }
    }

    useEffect(() => {
        handleTaskCounter();
    }, [tasks])

    const handleToggleCheckbox = (isChecked: boolean) => {
        // Incrementar ou decrementar o checkcounter baseado no estado da checkbox
        increment = isChecked ? 1 : -1;
        setCheckCounter(prevCounter => prevCounter + increment);
    };



    return(
        <View style={styles.container}>
            <View style={styles.todo}>
                <Image source={require('../components/images/rocket.png')} style={styles.rocket} />
                <Text style={styles.textTo}>
                    to
                </Text>
                <Text style={styles.textDo}>
                    do
                </Text>
            </View>
            <View style={styles.containerList}>
                <View style={styles.contadoresForm}>
                    <Text style={styles.textoCriadas}>
                        Criadas
                    </Text>
                    <View style={styles.contadorCriadas}>
                        <Text style={styles.numContadores}>
                            {taskCounter}
                        </Text>
                    </View>
                    <Text style={styles.textoConcluidas}>
                        Concluídas
                    </Text>
                    <View style={styles.contadorConcluidas}>
                        <Text style={styles.numContadores}>
                            {checkCounter}
                        </Text>
                    </View>
                </View>
            <FlatList
            data={tasks}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <Task
                key={item}
                description={item}
                onRemove={() => handleTaskRemove(item)}
                onToggleCheckbox={handleToggleCheckbox}
                

                
                // fazer a função de remover a task
                
                />
            )}
            showsVerticalScrollIndicator ={false}
            ListEmptyComponent={() => (
                <View style={styles.formEmptyList}>
                    <Image source={require('../components/images/clipboard.png')} style={styles.clipboard} />
                    <Text style={styles.listEmptyText}>
                        Você ainda não tem tarefas cadastradas
                    </Text>
                    <Text style={styles.listEmptySubText}>
                        Crie tarefas e organize seus itens a fazer
                    </Text>
                </View>
            )}
            //estilizar
            />

            </View>
            <View style={styles.form}>
            <TextInput 
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor={'#808080'}
            style={[
                styles.input, 
                { borderColor: isTyping ? '#5E60CE' : '#0D0D0D'}
             ]}
             onChangeText={handleInput}
             value={descTasks}
            
            />
            <Pressable
             onPress={handleTaskAdd}
             onPressIn={() => setIsPressedAdd(true)}
             onPressOut={() => setIsPressedAdd(false)}
             style={[styles.button,
                {
                    backgroundColor: isPressedAdd ? '#4EA8DE' : '#1E6F9F'
                }
             ]}
             >
                <View style={styles.addButtonCircle} />
                <Text style={styles.textoBotao}>
                    +
                </Text>
            </Pressable>
            </View>
        </View>
    )
}

