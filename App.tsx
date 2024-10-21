import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import AddNoteButton from './components/AddNoteButton';

interface Note {
  id: string;
  content: string;
}

export default function App() {
  const [note, setNote] = useState<string>('');
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = () => {
    if (note.trim()) {
      setNotes([...notes, { id: Date.now().toString(), content: note }]);
      setNote(''); // Clear the input after adding
    }
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Note App</Text>

      <TextInput
        style={styles.input}
        placeholder="Write a note..."
        value={note}
        onChangeText={setNote}
      />

      <AddNoteButton onPress={addNote} />

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.noteContainer}>
            <Text style={styles.noteText}>{item.content}</Text>
            <TouchableOpacity onPress={() => deleteNote(item.id)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  button: {
    padding: 20,
    fontSize: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  noteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  noteText: {
    fontSize: 16,
  },
  deleteButton: {
    color: 'red',
    fontWeight: 'bold',
  },
});
