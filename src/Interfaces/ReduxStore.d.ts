import { DefaultRootState } from 'react-redux';

export interface ReduxStore extends DefaultRootState {
  home: string;
}
