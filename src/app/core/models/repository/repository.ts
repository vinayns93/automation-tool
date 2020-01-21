
export class Repository {
    id: number;
    logicalName: string;
    findMethod: string;
    xpathQueryPropertyName: string;
    propertyValue: string;
    tagName: string;
    module: string;
    statusID: number;
    cudStatusID: number;
    isLocked: boolean;
    lockedByUser: number;
    createdOn: Date;
    updatedOn: Date;
    userId: number;
}