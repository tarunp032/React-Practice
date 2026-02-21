import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../slice/counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        marginTop: "40px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ marginBottom: "20px", color: "#333" }}>
        Redux Toolkit Counter
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <button
          style={{
            padding: "8px 16px",
            fontSize: "16px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            background: "#667eea",
            color: "#fff",
          }}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>

        <span
          style={{
            minWidth: "40px",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          {count}
        </span>

        <button
          style={{
            padding: "8px 16px",
            fontSize: "16px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            background: "#e53e3e",
            color: "#fff",
          }}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          −
        </button>
      </div>
    </div>
  );
}
