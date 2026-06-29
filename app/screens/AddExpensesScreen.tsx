import { useRouter } from 'expo-router';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { auth, db } from '../../firebase';

export default function AddExpenseScreen() {
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const router = useRouter();

  const categories = ['🍔 Food', '🚗 Transport', '🛍️ Shopping', '💡 Bills', '🎉 Others'];

  const handleAddExpense = async () => {
    if (!amount || !selectedCategory) {
      alert('Please fill in amount and category!');
      return;
    }

    try {
      await addDoc(collection(db, 'expenses'), {
        amount: parseFloat(amount),
        category: selectedCategory,
        note: note,
        userId: auth.currentUser?.uid,
        createdAt: serverTimestamp(),
      });
      router.back();
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Add Expense 💸</Text>

      <TextInput
        label="Amount (RM)"
        value={amount}
        onChangeText={setAmount}
        mode="outlined"
        style={styles.input}
        keyboardType="numeric"
      />

      <TextInput
        label="Note (optional)"
        value={note}
        onChangeText={setNote}
        mode="outlined"
        style={styles.input}
      />

      <Text style={styles.categoryTitle}>Select Category</Text>
      <View style={styles.categoryContainer}>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.categoryButton,
              selectedCategory === cat && styles.categorySelected,
            ]}
            onPress={() => setSelectedCategory(cat)}
          >
            <Text style={[
              styles.categoryText,
              selectedCategory === cat && styles.categoryTextSelected,
            ]}>
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Button mode="contained" style={styles.button} onPress={handleAddExpense}>
        Save Expense
      </Button>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.cancel}>Cancel</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 24,
  },
  categoryButton: {
    borderWidth: 1,
    borderColor: '#6200ee',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  categorySelected: {
    backgroundColor: '#6200ee',
  },
  categoryText: {
    color: '#6200ee',
  },
  categoryTextSelected: {
    color: '#fff',
  },
  button: {
    paddingVertical: 6,
    marginBottom: 16,
  },
  cancel: {
    textAlign: 'center',
    color: '#888',
    marginTop: 8,
  },
});