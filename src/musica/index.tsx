import { View, Text, FlatList, ScrollView } from 'react-native'

interface Artista {
  favoriteColor: string
  nombre: string
  musica: string
}

const artistas: Artista[] = [
  { favoriteColor: '#3498db', nombre: 'Ana', musica: 'Pop' },
  { favoriteColor: '#e74c3c', nombre: 'Carlos', musica: 'Rock' },
  { favoriteColor: '#2ecc71', nombre: 'Elena', musica: 'Jazz' },
  { favoriteColor: '#9b59b6', nombre: 'David', musica: 'Electrónica' },
  { favoriteColor: '#f1c40f', nombre: 'Isabel', musica: 'Reggae' },
  { favoriteColor: '#e67e22', nombre: 'Juan', musica: 'Hip-Hop' },
  { favoriteColor: '#d35400', nombre: 'Marta', musica: 'Indie' },
  { favoriteColor: '#7f8c8d', nombre: 'Pedro', musica: 'Clásica' },
  { favoriteColor: '#77C128', nombre: 'Luisa', musica: 'R&B' },
  { favoriteColor: '#ffffff', nombre: 'Mario', musica: 'Country' },
  { favoriteColor: '#00bcd4', nombre: 'Laura', musica: 'Folk' },
  { favoriteColor: '#a52a2a', nombre: 'Sergio', musica: 'Soul' },
  { favoriteColor: '#ffd700', nombre: 'Carmen', musica: 'Flamenco' },
  { favoriteColor: '#c0c0c0', nombre: 'Gabriel', musica: 'Metal' },
  { favoriteColor: '#40e0d0', nombre: 'Rosa', musica: 'Blues' },
]

export default function Musica() {
  return (
    <FlatList
      ListHeaderComponent={() => <Text className="h-6" />}
      data={artistas}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View
          className="p-4 m-6 mt-0 rounded-xl"
          style={{ backgroundColor: item.favoriteColor }}
        >
          <Text className="text-xl font-bold">Name: {item.nombre}</Text>
          <Text className="font-bold">Music: {item.musica}</Text>
        </View>
      )}
    />
  )
}
