/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, within } from "@testing-library/react";
import { DashboardView } from "./dashboard.view";
import { MetricsRepository } from "../../../domain/metric/metric.repository";

jest.mock("../../../domain/metric/metric.repository");

beforeEach(() => {
  jest.resetAllMocks();
});

describe("Dashboard View", () => {
  describe("When then is no metrics available", () => {
    beforeEach(() => {
      MetricsRepository.fetchMetricsByDate.mockImplementation(() =>
        Promise.resolve([])
      );
      MetricsRepository.fetchMetrics.mockImplementation(() =>
        Promise.resolve([])
      );
    });
    it("should show 0 on minute, hour, and day average metrics", async () => {
      render(<DashboardView></DashboardView>);

      const tableAverageMetrics = await screen.findByLabelText(
        "metrics average table"
      );
      const averageMetrics = within(tableAverageMetrics).getAllByText(0);
      expect(averageMetrics.length).toBe(3);
    });

    it("should not show a timeline", () => {
      render(<DashboardView></DashboardView>);
      const timeline = screen.queryByLabelText("timeline");
      expect(timeline).not.toBeInTheDocument();
    });
  });
});
