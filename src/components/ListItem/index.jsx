import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function ListItem(props) {
  const {
    owner,
    answer_count,
    score,
    creation_date,
    question_id,
    title
  } = props;

  //Данные для тестирования
  // const owner = {
  //   user_id: 2901823,
  //   profile_image: 'https://i.stack.imgur.com/09YgN.png?s=128&g=1',
  //   display_name: 'Sage Kelly'
  // };
  // const answer_count = 12;
  // const score = 1;
  // const creation_date = 1520421269 * 1000; //время приходит в секундах
  // const question_id = 49145333;
  // const title = 'What are the Necessary Startup Angular Files?';

  return (
    <div className="listItem">
      <div className="statsContainer">
        <ItemCounter number={score}>votes</ItemCounter>
        <ItemCounter number={answer_count}>answers</ItemCounter>
      </div>
      <div className="summaryContainer">
        <Title
          title={title}
          href={`https://stackoverflow.com/q/${question_id}`}
        />
        <ItemAuthor creationDate={creation_date} owner={owner} />
      </div>
      <div style={{ clear: 'both' }} />
    </div>
  );
}

ListItem.propTypes = {
  owner: PropTypes.shape({
    user_id: PropTypes.number, //https://stackoverflow.com/users/ + JSON: user_id
    profile_image: PropTypes.string, //JSON: profile_image
    display_name: PropTypes.string //JSON: display_name
  }),
  answer_count: PropTypes.number, //JSON: answer_count
  score: PropTypes.number, //JSON: score
  creation_date: PropTypes.number, //JSON: answer_count
  question_id: PropTypes.string, //"https://stackoverflow.com/q/" + JSON: question_id
  title: PropTypes.string //JSON: title
};

ListItem.defaultProps = {
  owner: {
    user_id: null,
    profile_image: '', //TODO: какую ссылку поставить здесь?
    display_name: ''
  },
  answer_count: 0,
  score: 0,
  creation_date: null,
  question_id: '',
  title: ''
};

function ItemCounter(props) {
  const { number, children } = props;

  return (
    <div className="itemCounter">
      <strong>{number}</strong>
      <br />
      {children}
    </div>
  );
}

function Title(props) {
  const { title, href } = props;

  return (
    <h2 className="title">
      <a href={href}>{title}</a>
    </h2>
  );
}

function ItemAuthor(props) {
  const { owner, creationDate } = props;

  return (
    <div className="itemAuthor">
      <img src={owner.profile_image} alt="" />
      <div className="authorDetails">
        <a href={`https://stackoverflow.com/users/${owner.user_id}`}>
          {owner.display_name}
        </a>
        <p>asked {new Date(creationDate).toDateString()}</p>
      </div>
      <div style={{ clear: 'both' }} />
    </div>
  );
}
