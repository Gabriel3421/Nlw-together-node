import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUserrAddPassword1624711967013 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("users",
            new TableColumn({
                name: "password",
                type: "varchar",
                default: '123'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "password")
    }

}
