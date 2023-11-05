import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { DataInterface } from "src/types"
import * as mockData from "../data/data.json"
import axios from "axios"
jest.mock("axios")
import App from "../App"

describe("App", () => {
  it("renders App component", async () => {
    render(<App />)
    const headerElement = await screen.findByText(
      /クリプタクトで計算を始めてみましょう/i
    )
    expect(headerElement).toBeInTheDocument()
  })

  describe("Get data from api fetch", () => {
    let response: DataInterface | null
    beforeEach(() => {
      response = mockData
    })

    it("makes a fetch request", async () => {
      axios.get = jest.fn(() =>
        Promise.resolve({ json: () => Promise.resolve(mockData) })
      ) as jest.Mock
      render(<App />)
      expect(axios.get).toHaveBeenCalledTimes(1)
    })

    it("The data should be the same as the mock", () => {
      expect(response).toEqual(mockData)
    })

    it("handles data fetch error", async () => {
      axios.get = jest.fn(() =>
        Promise.reject(new Error("Network Error"))
      ) as jest.Mock

      render(<App />)

      const errorElement = await screen.findByText("データをロードできない")
      expect(errorElement).toBeInTheDocument()
    })
  })
})
