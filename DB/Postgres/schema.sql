BEGIN;


CREATE TABLE IF NOT EXISTS "Aetelier".reviews
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
    helpfulness integer NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS "Aetelier".reviews_photos
(
    id integer NOT NULL,
    review_id integer NOT NULL,
    url text NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS "Aetelier".characteristic_reviews
(
    id integer NOT NULL,
    characteristic_id integer NOT NULL,
    review_id integer NOT NULL,
    value integer,
    PRIMARY KEY (id)
);

ALTER TABLE IF EXISTS "Aetelier".reviews_photos
    ADD FOREIGN KEY (review_id)
    REFERENCES "Aetelier".reviews (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS "Aetelier".characteristic_reviews
    ADD FOREIGN KEY (review_id)
    REFERENCES "Aetelier".reviews (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;