import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
import { Result } from "./Success.styled";

export const Success = () => {
    const history = useHistory();
    return (
        <Result
            status="success"
            title="Success!"
            subTitle={
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <p>Your order was sent to processing!</p>
                    <p>Check your email box for further information.</p>
                </div>
            }
            extra={[
                <Button
                    type="primary"
                    key="console"
                    onClick={() => history.push("/catalog")}
                >
                    Go Back To Catalog
                </Button>,
            ]}
        />
    );
};
