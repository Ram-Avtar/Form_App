import React, { Component } from 'react';
import { Text,TextInput, View, ScrollView, StyleSheet, Picker, Switch, Button,Modal } from 'react-native';
import { Card } from 'react-native-elements';


class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          mobile: '',
          pass:'',
          gender:'Gender',
          showModal: false
        }
    }

    static navigationOptions = {
        title: 'Registration Form',
    };

    toggleModal() {
        this.setState({showModal: !this.state.showModal});
    }

    handleForm() {
        this.toggleModal();
    }

    resetForm() {
        this.setState({
            name: '',
            email: '',
            mobile: '',
            pass:'',
            gender:'Male',
            showModal: false
        });
    }

    render() {
        return(
            <View style={{flex:1,
                justifyContent:'center',
                backgroundColor:'#313435',
                paddingLeft:60,
                paddingRight:60,}}>
                <View style={styles.formRow}>
                <Text style={styles.textTitle}>Enter Your Name</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Your Name'
                    defaultValue={this.state.name}
                    onChangeText={text=>this.setState({name: text})}
                    underlineColorAndroi={'transparent'}
                  />
                  <Text style={styles.textTitle}>Enter Your Email</Text>
                  <TextInput
                      style={styles.textInput}
                      placeholder='E-mail'
                      defaultValue={this.state.email}
                      onChangeText={text=>this.setState({email: text})}
                      underlineColorAndroi={'transparent'}
                    />
                    <Text style={styles.textTitle}>Enter Your Mobile No.</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Mobile No.'
                        defaultValue={this.state.mobile}
                        onChangeText={text=>this.setState({mobile: text})}
                        underlineColorAndroi={'transparent'}
                      />
                      <Text style={styles.textTitle}>Enter Your Password</Text>
                      <TextInput
                          style={styles.textInput}
                          placeholder='Password'
                          defaultValue={this.state.pass}
                          onChangeText={text=>this.setState({pass: text})}
                          underlineColorAndroi={'transparent'}
                        />
                <Text style={styles.textTitle}>Choose Your Gender</Text>
                <Picker
                    style={styles.formItem}
                    selectedValue={this.state.gender}

                    onValueChange={(itemValue, itemIndex) => this.setState({gender: itemValue})}>
                    <Picker.Item label="Male" value="Male" />
                    <Picker.Item label="Female" value="Female" />
                    <Picker.Item label="Other" value="other" />
                </Picker>
                </View>

                <View style={styles.formRow}>
                <Button
                    onPress={() => this.handleForm()}
                    title="Submit"
                    color="#0099ff"

                    />
                </View>

                <Modal animationType = {"slide"} transparent = {false}

                    visible = {this.state.showModal}
                    onDismiss = {() => this.toggleModal() }
                    onRequestClose = {() => this.toggleModal() }>
                    <View style = {styles.modal}>
                        <Text style = {styles.modalTitle}>Your Details</Text>
                        <Text style = {styles.modalText}>Your Name: {this.state.name}</Text>
                        <Text style = {styles.modalText}>Your Email: {this.state.email}</Text>
                        <Text style = {styles.modalText}>Your Mobile No.: {this.state.mobile}</Text>
                        <Text style = {styles.modalText}>Gender: {this.state.gender}</Text>


                        <Button
                            onPress = {() =>{this.toggleModal(); this.resetForm();}}
                            color="#0099ff"
                            title="Close"
                            />
                    </View>
                </Modal>

            </View>
        );
    }

};

const styles = StyleSheet.create({
    formRow: {
      alignSelf: 'stretch',
    },
    textInput:{
      alignSelf: 'stretch',
      height:40,
      marginBottom:30,
      color:'#fff',
      borderBottomColor:'#199187',
      borderBottomWidth:1,
    },
    textTitle:{
      fontSize:15,
      fontWeight:'bold',
      color:"#0099ff"
    },
    formItem: {
        color:'#fff'
    },
     modal: {

       justifyContent: 'center',
       margin: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#0099ff',
        textAlign: 'center',
        color: 'white',
        marginBottom: 20
    },
    modalText: {
        fontSize: 18,
        margin: 10
    }
});

export default Form;
