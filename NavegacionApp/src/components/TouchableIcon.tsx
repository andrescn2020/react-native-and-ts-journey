import React from 'react'
import { TouchableOpacity } from 'react-native';
import { colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

interface Props {
    iconName: string
}

const TouchableIcon = ({iconName}: Props) => {

    const {changeFavoriteIcon} = useContext(AuthContext)

    return (
        <TouchableOpacity onPress={() => changeFavoriteIcon(iconName)}>
            <Icon 
                name={iconName}
                size={60} 
                color={colores.primary} />
        </TouchableOpacity>
    )
}

export default TouchableIcon