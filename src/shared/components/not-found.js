import React from 'react';

import {H1} from './typography';
import {Layout, LayoutItem, TextAlign, Padded} from '../../lib/react-layout';
import Logo from './logo';
import Link from '../containers/link';

export default function NotFound() {
  return (
    <Padded>
      <Layout center>
        <LayoutItem max="500px">
          <TextAlign center>
            <Logo style={styles.logo}/>
            <H1>Oops!</H1>
            <p>
              Looks like you've stumbled onto a page that doesn't really exist. It's probably best for you to <Link name="home">go back to the homepage</Link>.
            </p>
          </TextAlign>
        </LayoutItem>
      </Layout>
    </Padded>
  );
}

const styles = {
  logo: {
    width: '150px',
    height: '109px'
  }
};
