BEGIN;

CREATE TABLE IF NOT EXISTS reviews
(
    id integer NOT NULL,
    product_id integer NOT NULL,
    rating integer NOT NULL,
    date text NOT NULL,
    summary text NOT NULL,
    body text NOT NULL,
    recommend boolean NOT NULL,
    reported boolean NOT NULL,
    reviewer_name text NOT NULL,
    reviewer_email text NOT NULL,
    response text,
    helpfulness integer,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS photos
(
    id integer NOT NULL,
    review_id integer NOT NULL,
    url text,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS meta
(
    id integer NOT NULL,
    product_id integer NOT NULL,
    name text NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS meta_data
(
    cid integer NOT NULL,
    characteristic_id integer NOT NULL,
    review_id integer NOT NULL,
    value text NOT NULL,
    PRIMARY KEY (cid)
);

ALTER TABLE IF EXISTS photos
    ADD FOREIGN KEY (review_id)
    REFERENCES reviews (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS meta
    ADD FOREIGN KEY (id)
    REFERENCES meta_data (cid) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS meta_data
    ADD FOREIGN KEY (review_id)
    REFERENCES reviews (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

CREATE INDEX reviews_id on reviews(id, product_id);
CREATE INDEX photos_id on photos(id, review_id, url);
CREATE INDEX meta_id on meta(id, name, product_id);
CREATE INDEX meta_data_cid on meta_data(cid, review_id, characteristic_id, value);

END;