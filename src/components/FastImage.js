import { Image } from 'expo-image';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import * as Crypto from 'expo-crypto';
import * as FileSystem from 'expo-file-system';

const FastImage = ({ source, ...props }) => {
  const [uri, setUri] = useState(source.uri);

  useEffect(() => {
    (async () => {
      try {
        const hashed = await Crypto.digestStringAsync(
          Crypto.CryptoDigestAlgorithm.SHA256,
          source.uri
        );
        const fileSystemUri = `${FileSystem.cacheDirectory}${hashed}`;

        const metadata = await FileSystem.getInfoAsync(fileSystemUri);
        //metadata 값이 없으면 없는거니 캐싱해야함
        if (!metadata.exists) {
          await FileSystem.downloadAsync(source.uri, fileSystemUri);
        }
        //이미 있어서 안받던 없어서 받았던 이젠 존재함
        setUri(fileSystemUri);
      } catch (e) {
        setUri(source.uri);
      }
    })();
  }, [source.uri]);

  return <Image source={{ uri }} {...props} />;
};

FastImage.propTypes = {
  source: PropTypes.object.isRequired,
};

export default FastImage;
