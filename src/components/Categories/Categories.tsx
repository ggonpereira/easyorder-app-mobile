import { useState } from 'react';
import { FlatList } from 'react-native';
import { categories } from '../../mocks/categories';
import { Text } from '../Text';
import * as S from './Categories.styles';

export const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSelectCategory = (id: string) => {
    if (id === selectedCategory) return setSelectedCategory('');
    setSelectedCategory(id);
  };

  return (
    <FlatList
      data={categories}
      keyExtractor={(category) => category._id}
      horizontal
      contentContainerStyle={{ paddingHorizontal: 20 }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        const isSelected = selectedCategory === item._id;

        return (
          <S.Category onPress={() => handleSelectCategory(item._id)}>
            <S.Icon>
              <Text opacity={isSelected ? 1 : 0.5}>{item.icon}</Text>
            </S.Icon>

            <S.Text weight="600" size={14} opacity={isSelected ? 1 : 0.5}>
              {item.name}
            </S.Text>
          </S.Category>
        );
      }}
    />
  );
};
