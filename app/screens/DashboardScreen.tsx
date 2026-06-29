import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { auth } from '../../firebase';


export default function DashboardScreen() {
  const user = auth.currentUser;
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi, {user?.email} 👋</Text>
        <Text style={styles.date}>
          {new Date().toLocaleString('en-MY', { month: 'long', year: 'numeric' })}
        </Text>
      </View>

      {/* Budget Card */}
      <View style={styles.card}>
        <Text style={styles.cardLabel}>Budget Remaining</Text>
        <Text style={styles.cardAmount}>RM 0.00</Text>
        <Text style={styles.cardSub}>of RM 0.00 budget</Text>
      </View>

      {/* Recent Transactions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        <Text style={styles.empty}>No transactions yet.</Text>
      </View>

      {/* Add Expense Button */}
      <TouchableOpacity style={styles.addButton} onPress={() => router.push('/screens/AddExpensesScreen')}>
        <Text style={styles.addButtonText}>➕ Add Expense</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#6200ee',
    padding: 24,
    paddingTop: 60,
  },
  greeting: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  date: {
    color: '#ddd',
    fontSize: 14,
    marginTop: 4,
  },
  card: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
  },
  cardLabel: {
    fontSize: 14,
    color: '#888',
  },
  cardAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#6200ee',
    marginTop: 8,
  },
  cardSub: {
    fontSize: 13,
    color: '#aaa',
    marginTop: 4,
  },
  section: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  empty: {
    color: '#aaa',
    textAlign: 'center',
    paddingVertical: 16,
  },
  addButton: {
    backgroundColor: '#6200ee',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});