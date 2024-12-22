import React, { useState } from 'react';

const EmojiLabel = () => {
          const [text, setText] = useState('');
          const [image, setImage] = useState('');

          const handleInputChange = (event) => {
                    const input = event.target.value.toLowerCase();
                    setText(input);

                    // Update image based on input
                    switch (input) {
                              case 'happy':
                                        setImage('happy.png'); 
                                        break;
                              case 'like':
                                        setImage('like.png'); 
                                        break;
                              case 'sad':
                                        setImage('sad.png'); 
                                        break;
                              default:
                                        setImage(''); 
                    }
          };

          return (
                    <div style={{ textAlign: 'center', margin: '20px' }}>
                              <h2>Emoji Display</h2>
                              <input
                                        type="text"
                                        value={text}
                                        onChange={handleInputChange}
                                        placeholder="Type 'Happy', 'Like', or 'Sad'"
                                        style={{ padding: '10px', fontSize: '16px' }}
                              />
                              <div style={{ marginTop: '20px' }}>
                                        {image && <img src={image} alt={text} style={{ width: '100px', height: '100px' }} />}
                                        {!image && <p>Type something to see the emoji!</p>}
                              </div>
                    </div>
          );
};

export default EmojiLabel;