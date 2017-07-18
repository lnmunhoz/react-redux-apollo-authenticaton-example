import { connect } from 'react-redux';
import { logoutUser } from '../actions/user';
import App from '../components/App';

const mapStateToProps = state => ({
  token: state.user.token,
});

const mapDispatchToProps = dispatch => ({
  logout() {
    dispatch(logoutUser());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
