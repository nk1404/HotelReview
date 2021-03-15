import React, { useContext } from "react";
import { useHistory, withRouter } from "react-router-dom";
import withStyles from "react-jss";
import propTypes from "prop-types";
import FormContext from "../../data/contexts";
import homeBanner from "../../assets/images/homeBanner.jpg";
import BootstrapTable from "react-bootstrap-table-next";
import Moment from "moment";

const styles = {
  homeBanner: {
    backgroundImage: "url(./assets/images/homeBanner.jpg)",
    width: "auto",
    height: "10rem",
  },
  branding: {
    background: "#511E61",
    color: "white",
    minHeight: "80vh",
  },
  paddingTop2: {
    paddingTop: "2rem",
  },
  paddingTop1: {
    paddingTop: "1rem",
  },
  hotelDetails: {
    padding: "1rem",
    textAlign: "left",
  },
  reviewTable: {
    padding: "2rem",
    "& th": {
      color: "white",
    },
    "& td": {
      color: "white",
    },
  },
};

const ReviewPage = ({ classes }) => {
  const history = useHistory();
  const [formContext, setFormContext] = useContext(FormContext);
  const hotelDetails = formContext?.reviewResults;
  const reviews = hotelDetails[0]?.reviews;
  reviews.map((data) => {
      data.FormattedDate = Moment(data.publishedDate).format("MMMM Do, YYYY");
    });
  const navigateBack = () => {
    history.goBack();
  } 
  const columns = [
    {
      dataField: "FormattedDate",
      text: "Published Date",
      sort: true,
    },
    {
      dataField: "rating",
      text: "Rating",
      sort: true,
    },
    {
      dataField: "title",
      text: "Title",
      sort: true,
    },
    {
      dataField: "text",
      text: "Text",
      sort: true,
    },
    {
      dataField: "user.username",
      text: "User",
      sort: true,
    },
    {
      dataField: "tripType",
      text: "Trip Type",
      sort: true,
    },
  ];

  const defaultSorted = [
    {
      dataField: "rating",
      order: "desc",
    },
  ];

  return (
    <div>
      <div>
        <img className={classes.homeBanner} src={homeBanner} alt="homeBanner" />
      </div>
      
        <div className={classes.branding}>
          <div>
            <button type="button" className="btn btn-primary mt-4" onClick={navigateBack}>Go Back</button>
          </div>
          {reviews.length !== 0 && (
          <div>
          <div className={classes.hotelDetails}>
            <h2 className={classes.paddingTop2}>
              Hotel: {hotelDetails[0].name}
            </h2>
            <h3 className={classes.paddingTop1}>
              Address: {hotelDetails[0].address}
            </h3>
            <h3 className={classes.paddingTop1}>
              Average Rating: {hotelDetails[0].rating}
            </h3>
          </div>
          <div className={classes.reviewTable}>
            <BootstrapTable
              keyField="title"
              data={reviews}
              columns={columns}
              defaultSorted={defaultSorted}
            />
          </div>
          </div>
      )}
      {reviews.length == 0 && (
          <h3 className={classes.paddingTop2}>No reviews found</h3>
      )}
      </div>
    </div>
  );
};

// eslint-disable-next-line react/no-typos
ReviewPage.propTypes = {
  classes: propTypes.shape({
    homeBanner: propTypes.string,
    branding: propTypes.string,
    paddingTop2: propTypes.string,
    paddingTop1: propTypes.string,
    hotelDetails: propTypes.string,
    reviewTable: propTypes.string,
  }).isRequired,
};

export default withRouter(withStyles(styles)(ReviewPage));
