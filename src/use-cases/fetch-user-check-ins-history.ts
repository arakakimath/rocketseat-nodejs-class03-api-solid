import { CheckIn } from '@prisma/client'

import { CheckInsRepository } from '@/repositories/check-ins-repository'
import { z } from 'zod'

interface FetchUserCheckInsHistoryUseCaseRequest {
  userId: string
  page?: string
}

interface FetchUserCheckInsHistoryUseCaseResponse {
  checkIns: CheckIn[]
}

export class FetchUserCheckInsHistoryUseCase {
  constructor(private checkInsRepository: CheckInsRepository) { }

  async execute({
    userId,
    page,
  }: FetchUserCheckInsHistoryUseCaseRequest): Promise<FetchUserCheckInsHistoryUseCaseResponse> {
    const pageSchema = z.object({
      page: z.number().default(1)
    })

    const pageObj = pageSchema.parse({ page })

    const checkIns = await this.checkInsRepository.findManyByUserId(
      userId,
      pageObj.page,
    )

    return { checkIns }
  }
}
