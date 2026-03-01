import { TouchableOpacity } from "react-native"


const EventButton = () => { 
    const _onPressIn = () => console.log('Press In !!!\n')
    const _onPressOut = () => console.log('Press Out !!!\n')
    const _onPress = () => console.log('Press !!!\n')
    const _onLongPress = () => console.log('Long Press !!!\n')

    return (
        <TouchableOpacity></TouchableOpacity>
    )
 }