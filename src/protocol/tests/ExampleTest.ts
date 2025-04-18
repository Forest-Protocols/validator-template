import { TestResult } from "@/core/types";
import { Validation } from "../validation";
import { randomInteger } from "@/utils/random-integer";
import { sleep } from "@/utils/sleep";
import { PerformanceTest } from "@/base/PerformanceTest";

export type ExampleTestResult = {
  num: number;
};

export class ExampleTest extends PerformanceTest<
  ExampleTestResult,
  Validation
> {
  async execute(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    validation: Validation
  ): Promise<TestResult<{ num: number }>> {
    this.logger.info("doing test....");
    const waitTime = randomInteger(1_000, 5_000);
    await sleep(waitTime);

    return {
      isSuccess: true,
      raw: `This test executed for ${waitTime} seconds`,
      result: {
        num: waitTime,
      },
      testName: this.name,
    };
  }
}
