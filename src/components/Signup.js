import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'


//firebase config
import app from './Firebase'
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native';

//navigation
import { useNavigation } from '@react-navigation/native'
import { Button } from 'react-native';



const Signup = () => {
   //firebase auth
   const auth = getAuth(app)

   //navigation
    const navigate= useNavigation()
   //write to firebase
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [fullname, setFullname] = useState('')
   const [dateOfBirth, setDateOfBirth] = useState('')

    //create user with email and password
    const createUser = async(e) => {
       e.preventDefault()
       await createUserWithEmailAndPassword(auth, email, password)
         .then((auth) => {
            updateProfile(auth.user, {
                displayName: fullname,
                dateOfBirth: dateOfBirth

            })
         })
         .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            navigate.navigate('Verification', {name: "Verification"})

            // ...
          
         })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode, errorMessage)
            })
    }

    const twofunc = () => {
        createUser()
        navigate.navigate('Verification', {name: "Verification"})
    }


  return (
    <SafeAreaView>
        <View>
            <View className="items-center">
                <Image source={require('../../assets/signupPage.png')} className="w-2/3 h-[65%] " />
            </View>
            <View className="flex-row items-center justify-center -mt-24">
                <Image source={require('../../assets/applogo2.png')} className="w-12 h-12" />
                <Text className=" text-center">Chatbubble</Text>
            </View>
            <View className="space-y-8">
                <View className="pl-4 space-y-2">
                    <Text className="">Your email address</Text>    
                    <View className="flex-row items-center justify-between rounded-3xl border-2 p-3 border-[#e6e4e4]">
                        <TouchableOpacity>
                            <TextInput className="text-gray-400" label="email" inputMode='email' keyboardType='email-address' placeholder="Email" value={email} onChangeText={(e) => setEmail(e)} />
                        </TouchableOpacity>
                    </View>  
                </View>
                <View className="pl-4 space-y-2">
                    <Text className="">Choose a password</Text>
                    <View className="flex-row items-center justify-between rounded-3xl border-2 p-3 border-[#e6e4e4]">
                        <TouchableOpacity>
                            <TextInput className="text-gray-400 placeholder-opacity-75" label="password" secureTextEntry  value={password} placeholder="Password" onChangeText={(e) => setPassword(e)} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View className="justify-center items-center ml-[25%] p-2 bg-[#A7FD85] w-1/2 rounded-3xl">
                    <TouchableOpacity onPress={twofunc}>
                        <View className="items-center justify-center">
                            <Text className="text-center">Continue</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    </SafeAreaView>
  )
}

export default Signup