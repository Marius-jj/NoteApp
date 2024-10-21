import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";


interface AddNoteButtonProps {
    onPress: () => void;
}

const AddNoteButton: React.FC<AddNoteButtonProps> = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Add Note</Text>
        </TouchableOpacity>
    );
};

export default AddNoteButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1e90ff',
        padding: 10,
        borderRadius: 50,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});