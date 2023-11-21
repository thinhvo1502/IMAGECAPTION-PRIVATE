/*import React from "react";
import axios from "axios";
import React, { useState } from 'react';
import { View, Button, Text, TextInput } from 'react-native';

const CaptionApi = () => {
  const [imageURL, setImageURL] = useState('');
  const [caption, setCaption] = useState('');

  const handleGenerateCaption = () => {
    // Thay thế URL_API bằng URL thực tế của API bạn đang sử dụng
    const apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=10';

    axios.post(apiUrl, { imageUrl: imageURL })
      .then(response => {
        // Xử lý dữ liệu phản hồi từ server
        setCaption(response.data.caption);
      })
      .catch(error => {
        // Xử lý lỗi nếu có
        console.error('Error:', error.message);
      });
  };

  return (
    <View>
      <Text>Image URL:</Text>
      <TextInput
        placeholder="Enter image URL"
        value={imageURL}
        onChangeText={(text) => setImageURL(text)}
      />
      <Button
        title="Generate Caption"
        onPress={handleGenerateCaption}
      />
      <Text>Caption: {caption}</Text>
    </View>
  );
};

export default CaptionApi ;*/
