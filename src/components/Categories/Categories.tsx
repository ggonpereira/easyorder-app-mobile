import { Skeleton } from '@rneui/themed';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { Text } from '../Text';
import * as S from './Categories.styles';
import { CategoriesProps } from './interfaces';

const LoadedCategories = ({ categories }: CategoriesProps) => {
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

const LoadingCategories = () => {
  return (
    <FlatList
      data={[...Array(7)]}
      horizontal
      contentContainerStyle={{ paddingHorizontal: 20 }}
      showsHorizontalScrollIndicator={false}
      renderItem={({ index }) => (
        <Skeleton
          key={index}
          circle
          width={44}
          height={44}
          style={{ marginRight: 12 }}
        />
      )}
    />
  );
};

export const Categories = ({ isLoading, categories }: CategoriesProps) => {
  return (
    <>
      {isLoading ? (
        <LoadingCategories />
      ) : (
        <LoadedCategories categories={categories} />
      )}
    </>
  );
};
