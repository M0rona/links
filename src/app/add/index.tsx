import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { colors } from "@/styles/colors";
import { router } from "expo-router";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

export default function Add() {
  const [name, setName] = useState<string>("");
  const [url, setUrl] = useState<string>("");

  function handleAdd() {}

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={24} color={colors.gray[200]} />
        </TouchableOpacity>

        <Text style={styles.title}>Novo</Text>
      </View>

      <Text style={styles.label}>Selecione uma categoria</Text>
      <Categories />

      <View style={styles.form}>
        <Input placeholder="Nome" onChangeText={setName} />
        <Input placeholder="Url" onChangeText={setUrl} />
        <Button title="Adicionar" onPress={handleAdd} />
      </View>
    </View>
  );
}
