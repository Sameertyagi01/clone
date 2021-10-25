import React from 'react'
import { View, SafeAreaView, StyleSheet } from "react-native"
import Header from '../components/Header'
import Searchbar from '../components/SearchBar'
import MenuButtons from '../components/MenuButtons'
import ContactMenu from '../components/ContactMenu'
function Home() {
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ height: '100%' }}>
            <Header />
            <Searchbar />
            <MenuButtons />
            <ContactMenu />        
            </SafeAreaView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1c1c1c",
        padding: 15

    }

})
